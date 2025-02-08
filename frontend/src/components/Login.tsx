const Login = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-6xl">Login</h1>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Username"
          className="border-[1px] border-black rounded-md p-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-[1px] border-black rounded-md p-1"
        />
      </div>
    </div>
  )
}

export default Login
