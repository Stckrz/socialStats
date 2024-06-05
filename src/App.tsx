import './App.css'

function App() {

	return (
		<>
			<div className={"snap-y snap-mandatory w-screen h-screen scroll-smooth overflow-y-scroll"}>
				<div className={"snap-center snap-always h-screen w-screen bg-black"}></div>
				<div className={"snap-center h-screen w-screen bg-blue-900"}>d</div>
				<div className={"snap-center h-screen w-screen bg-red-900"}>d</div>
			</div>
		</>
	)
}

export default App
