
interface X {
    count: number
}

export const Count = ({count}: X) => {

    return (
        <p>
            {count}
        </p>
    )
}