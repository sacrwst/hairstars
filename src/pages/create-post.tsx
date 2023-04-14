import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const areas = ["池袋", "新宿", "渋谷"];

export default function CreatePost() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  return (
    <main className="createPost">
      <h2 className="text-3xl text-center">募集を作成</h2>

      <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow">
        <div className="p-6 mt-8">
          <form action="#">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                日付
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date) => setSelectedDate(date)}
                dateFormat="yyyy / MM / dd"
                minDate={today}
                className="w-5/12 rounded-lg appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                エリア
                <select
                  id="animals"
                  className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  name="area"
                >
                  <option value="">エリアを選択</option>
                  {areas.map((area) => (
                    <option value={area} key={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                予算
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="number"
                  id="create-account-first-name"
                  className="w-5/12 rounded-lg appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="minBudget"
                  placeholder="3000"
                />
                <span>〜</span>
                <input
                  type="number"
                  id="create-account-last-name"
                  className="w-5/12 rounded-lg appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="maxBudget"
                  placeholder="7000"
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                メニュー
              </label>
              <textarea
                id="create-account-email"
                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                placeholder="Email"
              />
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-600 hover:bg-blue-400  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
              >
                募集する！
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
