const Free = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-bold text-purple">دوره های هدیه گرفته شده</h1>
      <div className="flex flex-col gap-4">
        <h2>مینی دوره فن بیان و اعتماد به نفس</h2>
        <video width={"100%"} height={"auto"} controls autoPlay>
          <source
            src="https://s21.uupload.ir/files/saberzarei/Sequence%20001_960x540.mp4?play"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Free;
