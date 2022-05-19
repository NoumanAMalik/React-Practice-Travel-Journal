const Card = (props) => {
    return (
        <div className="max-w-[471px] w-full flex flex-row gap-5 items-center my-2">
            <div>
                <a href={props.imageUrl} target="_blank" rel="noreferrer">
                    <img
                        src={props.imageUrl}
                        alt={props.title}
                        className="w-36 h-44 rounded-md"
                    />
                </a>
            </div>
            <div className="max-w-[326px] w-full flex flex-col gap-1">
                <div className="flex flex-row items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-[#F55A5A]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="font-normal text-xs">{props.location}</p>
                    <a
                        href={props.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-normal text-xs text-gray-500 underline pl-1"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1 className="text-2xl font-bold">{props.title}</h1>
                <h2 className="font-bold text-xs">
                    {props.startDate} - {props.endDate}
                </h2>
                <p className="text-xs font-normal">{props.description}</p>
            </div>
        </div>
    );
};

export { Card as default };
