const Slider = ({ extension, onToggle }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="sr-only"
        checked={extension}
        onChange={onToggle}
      />
      <div
        className={`${extension ? "bg-toggle-active" : "bg-toggle-inactive"} h-5 w-9 rounded-full duration-150`}
      >
        <div
          className={`${extension ? "translate-x-[16px]" : ""} absolute top-0.5 left-0.5 h-4 w-4 transform rounded-full bg-white duration-300`}
        ></div>
      </div>
    </label>
  );
};

export default Slider;
