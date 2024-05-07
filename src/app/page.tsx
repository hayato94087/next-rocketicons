import { type FC } from "react";
import { RcRocketIcon } from "rocketicons/rc";
import { LuAlignEndHorizontal } from "rocketicons/lu";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-2 mx-2 my-2">
      <div className="bg-slate-200 px-2 py-2">
        <h1 className="text-base font-bold">アイコンを使う</h1>
        <div className="mt-2 py-2 px-2 rounded-md bg-white">
          <div className="flex flex-row space-x-2">
            <RcRocketIcon />
            <LuAlignEndHorizontal />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 px-2 py-2">
        <h1 className="text-base font-bold">色をつける</h1>
        <div className="mt-2 py-2 px-2 rounded-md bg-white">
          <div className="flex flex-row space-x-2">
            <RcRocketIcon className="icon-slate-600" />
            <RcRocketIcon className="icon-gray" />
            <RcRocketIcon className="icon-zinc-700" />
            <RcRocketIcon className="icon-neutral-400" />
            <RcRocketIcon className="icon-stone-500" />
            <RcRocketIcon className="icon-red-300" />
            <RcRocketIcon className="icon-orange-600" />
            <RcRocketIcon className="icon-amber" />
            <RcRocketIcon className="icon-yellow-800" />
            <RcRocketIcon className="icon-lime-500" />
            <RcRocketIcon className="icon-green-300" />
            <RcRocketIcon className="icon-emerald-400" />
            <RcRocketIcon className="icon-teal-500" />
            <RcRocketIcon className="icon-cyan-200" />
            <RcRocketIcon className="icon-sky" />
            <RcRocketIcon className="icon-blue-600" />
            <RcRocketIcon className="icon-indigo-400" />
            <RcRocketIcon className="icon-violet-200" />
            <RcRocketIcon className="icon-purple" />
            <RcRocketIcon className="icon-fuchsia-500" />
            <RcRocketIcon className="icon-pink-800" />
            <RcRocketIcon className="icon-rose" />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 px-2 py-2">
        <h1 className="text-base font-bold">サイズを変更</h1>
        <div className="mt-2 py-2 px-2 rounded-md bg-white">
          <div className="flex flex-row space-x-2 items-center">
            <RcRocketIcon className="icon-xs" />
            <RcRocketIcon className="icon-sm" />
            <RcRocketIcon className="icon-base" />
            <RcRocketIcon className="icon-lg" />
            <RcRocketIcon className="icon-xl" />
            <RcRocketIcon className="icon-2xl" />
            <RcRocketIcon className="icon-3xl" />
            <RcRocketIcon className="icon-4xl" />
            <RcRocketIcon className="icon-5xl" />
            <RcRocketIcon className="icon-6xl" />
            <RcRocketIcon className="icon-7xl" />
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <RcRocketIcon className="size-5" />
            <RcRocketIcon className="size-10" />
            <RcRocketIcon className="size-14" />
            <RcRocketIcon className="size-16" />
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <RcRocketIcon className="h-2 w-2" />
            <RcRocketIcon className="h-4 w-4" />
            <RcRocketIcon className="h-7 w-7" />
            <RcRocketIcon className="h-9 w-9" />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 px-2 py-2">
        <h1 className="text-base font-bold">hover</h1>
        <div className="mt-2 py-2 px-2 rounded-md bg-white">
          <div className="flex flex-row space-x-2">
            <RcRocketIcon className="size-10 hover:bg-red-100" />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 px-2 py-2">
        <h1 className="text-base font-bold">animate</h1>
        <div className="mt-2 py-2 px-2 rounded-md bg-white">
          <div className="flex flex-row space-x-2">
            <RcRocketIcon className="size-10 animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
