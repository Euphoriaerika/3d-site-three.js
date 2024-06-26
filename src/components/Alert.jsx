// Component representing an alert
const Alert = ({ text, type }) => {
  return (
    <div className="absolute top-16 left-0 right-0 flex justify-center items-start">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}  {/* Text for the icon */}
        </p>
        <p className="mr-2 text-left">{text}</p>  {/* Text for the alert */}
      </div>
    </div>
  );
};

export default Alert;
