import { useRef, useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { Chapter } from "../../Types/apiTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  addChapter,
  editChapter,
  removeChapter,
} from "../../api/setters/chapterAPI";
import { addEpisode, removeEpisode } from "../../api/setters/episodeAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";

type State = {
  id: string;
  chapters: Chapter[];
};

const ManageChapters = () => {
  const { id, chapters }: State = useLocation().state;
  const [chaptersState, setChaptersState] = useState(chapters);
  const [chapterId, setChapterId] = useState("");
  const queryClient = useQueryClient();
  const sessionsNumRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const episodeTitleRef = useRef<HTMLInputElement>(null);
  const episodeTextRef = useRef<HTMLInputElement>(null);
  const episodeChapterRef = useRef<HTMLInputElement>(null);

  const { token } = useAuth();
  const auth = useAuthHooks();

  const addChapterMutation = useMutation({
    mutationFn: (id: string) =>
      addChapter(
        { token, ...auth },
        {
          numberOfSessions: String(sessionsNumRef.current!.value),
          text: titleRef.current!.value,
          time: timeRef.current!.value,
          title: titleRef.current!.value,
          id,
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      sessionsNumRef.current!.value = "";
      titleRef.current!.value = "";
      timeRef.current!.value = "";
      setChapterId(data.id);
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const editChapterMutation = useMutation({
    mutationFn: (idx: number) => {
      const chapter = chaptersState[idx];
      return editChapter({ token, ...auth }, chapter._id, {
        numberOfSessions: chapter.numberOfSessions,
        text: chapter.text,
        time: `${chapter.time.hour}:${chapter.time.min}`,
        title: chapter.title,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const removChapterMutation = useMutation({
    mutationFn: (chapterId: string) =>
      removeChapter({ token, ...auth }, chapterId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const addEpisodeMutation = useMutation({
    mutationFn: (courseId: string) =>
      addEpisode(
        { token, ...auth },
        {
          text: episodeTextRef.current!.value,
          title: episodeTitleRef.current!.value,
          courseID: courseId,
          chapterID: episodeChapterRef.current!.value,
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      episodeTextRef.current!.value = "";
      episodeTitleRef.current!.value = "";
      episodeChapterRef.current!.value = "";
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const removEpisodeMutation = useMutation({
    mutationFn: (episodeId: string) =>
      removeEpisode({ token, ...auth }, episodeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const handleChange = (
    key: string,
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (key === "time") {
      const values = e.target.value.split(":");
      const updatedChapters = chaptersState.map((Chapter) => {
        if (Chapter._id === id) {
          return {
            ...Chapter,
            time: {
              hour: values[0],
              min: values[1],
            },
          };
        }
        return Chapter;
      });
      setChaptersState(updatedChapters);
    } else {
      const updatedChapters = chaptersState.map((Chapter) => {
        if (Chapter._id === id) {
          return { ...Chapter, [key]: e.target.value };
        }
        return Chapter;
      });
      setChaptersState(updatedChapters);
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span>اضافه کردن فصل جدید</span>
        <input type="number" placeholder="تعداد جلسات" ref={sessionsNumRef} />
        <input type="text" placeholder="تایتل" ref={titleRef} />
        <input
          type="text"
          placeholder="زمان برای مثال به صورت 1:41"
          ref={timeRef}
        />
        <button
          className="max-w-fit bg-pink"
          onClick={() => addChapterMutation.mutate(id)}
        >
          اضافه
        </button>
        <span>ایدی فصل اضافه شده :</span>
        <span>{chapterId}</span>
      </div>
      <div className="flex flex-col gap-3">
        <span>اضافه کردن قسمت جدید</span>
        <input
          type="text"
          placeholder="ایدی فصل مورد نظر"
          ref={episodeChapterRef}
        />
        <input type="text" placeholder="تایتل" ref={episodeTitleRef} />
        <input type="text" placeholder="متن" ref={episodeTextRef} />
        <button
          className="max-w-fit bg-pink"
          onClick={() => addEpisodeMutation.mutate(id)}
        >
          اضافه
        </button>
      </div>
      <span>لیست فصل ها</span>
      <ul className="flex flex-col gap-4">
        {chaptersState?.map(
          ({ _id, episodes, numberOfSessions, text, time, title }, idx) => (
            <li key={_id} className="flex flex-col gap-4">
              <span>{_id}</span>
              <div className="flex gap-4">
                <span>تعداد جلسات</span>
                <input
                  type="number"
                  value={numberOfSessions}
                  onChange={(e) => handleChange("numberOfSessions", e, _id)}
                />
              </div>
              <div className="flex gap-4">
                <span>تایتل</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleChange("title", e, _id)}
                />
              </div>
              <div className="flex gap-4">
                <span>متن</span>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => handleChange("text", e, _id)}
                />
              </div>
              <div className="flex gap-4">
                <span>زمان</span>
                <input
                  type="text"
                  defaultValue={`${time?.hour}:${time?.min}`}
                  onChange={(e) => handleChange("time", e, _id)}
                />
              </div>
              <div className="flex flex-col gap-5">
                <span>قسمت ها : </span>
                <ul className="flex flex-col gap-4">
                  {episodes?.map(({ _id, text, title }) => (
                    <li
                      key={_id}
                      className="flex flex-col gap-3 border-y border-black py-2"
                    >
                      <div className="flex flex-col gap-2">
                        <span>تایتل : {title} </span>
                        <span> متن : {text}</span>
                      </div>
                      <button
                        className="bg-yellow max-w-fit"
                        onClick={() => {
                          removEpisodeMutation.mutate(_id);
                        }}
                      >
                        حذف قسمت
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <button
                  className="max-w-fit bg-pink"
                  onClick={() => {
                    editChapterMutation.mutate(idx);
                  }}
                >
                  تغییر فصل
                </button>
                <button
                  className="max-w-fit bg-red-500 text-white"
                  onClick={() => removChapterMutation.mutate(_id)}
                >
                  حذف فصل
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ManageChapters;
