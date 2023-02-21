const IsNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="headline.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.category}</div>
                    <div className="badge badge-outline">{data.author}</div>
                </div>
            </div>
        </div>
    })
}

const NoNews = () => {
    return (
        <div className="text-center">
            Tidak ada data
        </div>
    )
}

const Newslist = ({ news }) => {
    return !news ? NoNews() : IsNews(news)
}

export default Newslist