

const PreviewOperaciones = ({operation}) => {
    const {type, ammount, createdAt} = operation
  return (
    <>
        <div className="border-b border-gray-300 px-1 mx-1 my-2">
            <div className="flex md:justify-between">
              <h2 className="px-5 py-2 capitalize whitespace-nowrap rounded-md w-1/3 text-center">{type}</h2>
              <h2 className="px-5 py-2 whitespace-nowrap rounded-md w-1/3 text-center">${ammount}</h2>
              <h2 className="px-5 py-2 whitespace-nowrap rounded-md w-1/3 text-center">{createdAt}</h2>
            </div>
        </div>
    </>
    
  )
}

export default PreviewOperaciones