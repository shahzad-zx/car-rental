import React, { useEffect, useState } from 'react'

const ReactStorageComponent = () => {
    const [title,setTitle] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        let _myData = []
        let data = localStorage.getItem("userData")
        if(data && data !== null) {
            let jsonData = JSON.parse(data)
            _myData = jsonData
        }
        _myData.push({listTitle : title});

        let strData = JSON.stringify(_myData);
        localStorage.setItem('userData', strData)
        setTitle('');
    }

    const fetchData = () => {
        let data = localStorage.getItem('userData')
        let jsonData = [];
        if(data && data !== null) {
            jsonData = JSON.parse(data)
        }
        
        return jsonData && jsonData.legth > 0 ? jsonData.map((item, index) => {
            return (
                <div key={index}>{index + 1} - {item.listTitle}</div>
            )
        }) : '<div>No Data</div>'
    }

    useEffect(() => {

    }, [title])
  return (
    <div>
      {fetchData()}

     <form
        onSubmit={formHandler}
        className="flex flex-col gap-4 p-6 bg-white shadow-xl rounded-2xl w-80 mx-auto mt-20"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your name"
          className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ReactStorageComponent
