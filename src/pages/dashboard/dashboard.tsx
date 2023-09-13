import toast from "react-hot-toast"

const Dashboard = () => {
function test(){
  toast.success('Hai')
}
  return (
    <section className="p-10">
      <div className="text-bgBtn">Dashboard</div>
      <button className="bg-bgBtn hover:bg-hoverBtn" onClick={()=> test()}>
        Click me
      </button>
    </section>
  )
}

export default Dashboard