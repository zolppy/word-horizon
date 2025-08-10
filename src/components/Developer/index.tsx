import { FaGithub } from "react-icons/fa6";
import type { Developer as DeveloperType } from "../../utils/types/developer";

export function Developer({
  img,
  name,
  description,
  github,
}: Omit<DeveloperType, "id">) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 pb-8 p-2 mx-auto">
        <img
          className="w-[200px] h-[200px] rounded-[50%] border border-black mx-auto"
          src={img}
          alt=""
        />
        <h3 className="font-bold text-[var(--primary-color-text)]">{name}</h3>
        <p className="text-left">{description}</p>
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-x-2 bg-[var(--primary-color)] text-white py-3 px-6 w-fit rounded-lg transition-colors duration-200 active:bg-[var(--primary-color-hover)] lg:hover:cursor-pointer lg:hover:bg-[var(--primary-color-hover)]"
        >
          <FaGithub /> Github
        </a>
      </div>
    </div>
  );
}

Developer.displayName = "Developer";
