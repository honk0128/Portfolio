export default function ExperienceCard(props) {
  return (
    <div
      className={
        props.background +
        " rounded-xl p-5 transition ease-in-out duration-1000 hover:scale-110"
      }
    >
      <div className="flex justify-center">
        <img
          className="bg-white max-w-full rounded-xl max-h-38"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="text-white mt-5">
        <h3 className="text-lg md:text-xl font-semibold">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
