import { useQuery } from "@tanstack/react-query";
import ParallaxHeader from "./ParallaxHeader";
import { getEvents } from "../api/getters/eventAPI";
import WithLoaderAndError from "./WithLoaderAndError";
import MainButton from "./UI/MainButton";
import useClickActive from "../hooks/useClickActive";
import Modal from "./UI/Modal";
import Backdrop from "./UI/Backdrop";
import Card from "./UI/Card";
import { BASE_URL } from "../api/axios";

const LandingEvent = () => {
  const { isActive, toggleActive } = useClickActive();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", "admin"],
    queryFn: () => getEvents(),
  });

  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      {data && data.length > 0 ? (
        <div>
          <ParallaxHeader bg={BASE_URL + data[0].images[0]} isLanding={true}>
            <div className="text-white flex flex-col gap-14 max-w-[40%] landing:text-sm px-2 tips2:max-w-[60%] landing:max-w-none books:text-xs">
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl landing:text-xl">
                  {data[0].title}
                </h1>
                <p>{data[0].text}</p>
              </div>
              <MainButton
                intent={"black"}
                size="card"
                text="مشاهده تخفیفات (کلیک کنید)"
                className="max-w-fit landing:px-3"
                onClick={toggleActive}
              />
              <Modal isActive={isActive}>
                <div className="flex flex-col gap-3">
                  {data[0].products.map((item) => {
                    return (
                      <Card
                        type="event"
                        details={item}
                        theme="black"
                        key={item._id}
                      />
                    );
                  })}
                </div>
              </Modal>
              <Backdrop show={isActive} func={toggleActive} />
            </div>
          </ParallaxHeader>
        </div>
      ) : null}
    </WithLoaderAndError>
  );
};

export default LandingEvent;
