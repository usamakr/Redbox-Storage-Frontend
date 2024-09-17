import React from 'react'

function TestPage() {
    const list: number[] = []

    for (let i = 0; i < 100; i++) {
        list.unshift(i)
    }

    return (
        <div className="grid grid-cols-2 w-full h-[400px] overflow-clip">
            <div className="h-[400px] bg-slate-200 w-full">
                {list.map((v) => {
                    return <p>{v}</p>
                })}
            </div>
            <div className="bg-slate-300 w-full  overflow-y-scroll">
                {list.map((v) => {
                    return <p>{v}</p>
                })}
            </div>
        </div>
    )
}

export default TestPage
