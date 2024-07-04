import { useRef, useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { FAQ } from "../../Types/apiTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFaq, editFaq, removeFaq } from "../../api/setters/FaqAPI";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";

type State = {
  id: string;
  faqs: FAQ[];
};

const ManageFaqs = () => {
  const queryClient = useQueryClient();
  const { id, faqs }: State = useLocation().state;
  const [faqsState, setFaqsState] = useState(faqs);
  const reqRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);

  const { token } = useAuth();
  const auth = useAuthHooks();

  const addFaqMutation = useMutation({
    mutationFn: () =>
      addFaq({ token, ...auth }, id, {
        answer: answerRef.current!.value,
        question: reqRef.current!.value,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const editFaqMutation = useMutation({
    mutationFn: (idx: number) =>
      editFaq({ token, ...auth }, faqsState[idx]._id, {
        answer: faqsState[idx].answer,
        question: faqsState[idx].question,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeFaqMutation = useMutation({
    mutationFn: (idx: number) =>
      removeFaq({ token, ...auth }, faqsState[idx]._id),
    onSuccess: (_: any, variables: number) => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
      setFaqsState((prev) => [...prev.splice(variables, 1)]);
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const handleQuestionChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedFaqs = faqsState.map((faq) => {
      if (faq._id === id) {
        return { ...faq, question: event.target.value };
      }
      return faq;
    });
    setFaqsState(updatedFaqs);
  };

  const handleAnswerChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedFaqs = faqsState.map((faq) => {
      if (faq._id === id) {
        return { ...faq, answer: event.target.value };
      }
      return faq;
    });
    setFaqsState(updatedFaqs);
  };

  const handleRemove = (idx: number) => {
    removeFaqMutation.mutate(idx);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span>سوال</span>
          <input type="text" ref={reqRef} />
        </div>
        <div className="flex flex-col">
          <span>جواب</span>
          <input type="text" ref={answerRef} />
        </div>
        <button
          className="max-w-fit bg-pink"
          onClick={() => addFaqMutation.mutate()}
        >
          اضافه
        </button>
      </div>
      <ul className="flex flex-col gap-6">
        {faqsState?.map(({ _id, answer, question }, idx) => (
          <li key={_id} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span>سوال</span>
              <input
                type="text"
                value={question}
                onChange={(event) => handleQuestionChange(event, _id)}
              />
            </div>
            <div className="flex flex-col">
              <span>جواب</span>
              <input
                type="text"
                value={answer}
                onChange={(event) => handleAnswerChange(event, _id)}
              />
            </div>
            <div className="flex gap-4">
              <button
                className="max-w-fit bg-pink"
                onClick={() => editFaqMutation.mutate(idx)}
              >
                تغییر
              </button>
              <button
                className="max-w-fit bg-pink"
                onClick={() => handleRemove(idx)}
              >
                حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageFaqs;
