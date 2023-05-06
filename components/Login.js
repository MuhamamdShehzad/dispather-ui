import Link from "next/link";

export default function Login() {
  return (
    <div className="relative flex flex-col items-center justify-center  overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Login Form
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="ml-8 inline text-lg font-semibold text-gray-800"
            >
              Username:
            </label>{" "}
            <input
              type="email"
              className="ml-12 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="ml-8 inline text-lg font-semibold text-gray-800"
            >
              Password:
            </label>
            <input
              type="password"
              className="ml-14 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className=" mt-5 flex flex-row justify-between">
            <div class=" flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="rememberMe" class="ml-2 block text-sm text-gray-900">
                Remember Me
              </label>
            </div>
            <div>
              <div className="mt-2">
                <Link href="/dashboard">
                  <button className="w-28 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Login
                  </button>
                </Link>
              </div>
              <Link
                href="/forget"
                className="text-xs text-blue-600 hover:underline"
              >
                Forget Password?
              </Link>
            </div>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
