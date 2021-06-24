
import './App.css';

function App() {
  return (
    <div>
      <div className=" bg-indigo-700 p-4 flex justify-between items-center  ">

        <div className="flex items-center">
          <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-512.png" width="50"></img>
          <a href="/#" className="inline-block py-2 px-3 text-indigo-300 mr-2 hover:text-red-100">Home</a>
          <a href="/#" className="inline-block py-2 px-3 text-indigo-300">About</a>
        </div>
        <div className="flex items-center">
          <a href="/#" className="inline-block py-2 px-3 text-indigo-300">Login</a>
          <a href="/#" className="inline-block py-2 px-3 text-indigo-700 
        bg-yellow-400 rounded hover:text-yellow-800 hover:bg-yellow-200 ease-in duration-150">Signup</a>
        </div>


      </div>
      <div className="flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100">
        <div className="w-1/2">
          <h2 className="text-4xl">Welcome To Mecca City</h2>
          <p>This is my site</p>
        </div>
        <div className="w-1/2">
          <img className="w-full rounded-full"
            src="https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
