export default function PortfolioCard(props) {
  return (
    <div className="p-5 flex flex-col transition ease-in-out duration-1000 hover:scale-110">
      <div className="flex justify-center">
        <img
          className="bg-white rounded-full max-w-full max-h-48"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="flex-1 mt-5">
        <h4 className="text-lg md:text-xl font-semibold">{props.title}</h4>
        <p>{props.text}</p>
      </div>
      <div className="grid grid-flow-col  auto-cols-auto gap-5 p-5 font-semibold portfolio-card-link">
        {props.appstore && (
          <a target="blank" href={props.appstore}>
            App Store
          </a>
        )}
        {props.playstore && (
          <a target="blank" href={props.playstore}>
            Play Store
          </a>
        )}
        {props.weblink && (
          <a target="blank" href={props.weblink}>
            Hemsida
          </a>
        )}
        {props.demolink && (
          <a target="blank" href={props.demolink}>
            Demo
          </a>
        )}
        {props.gitlink && (
          <a target="blank" href={props.gitlink}>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
