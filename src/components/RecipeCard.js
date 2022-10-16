
export default function RecipeCard({desc, title, img }){

    return(
                <div className="box">
                    <div className="date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>21st May, 2021</span>
                    </div>
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                    <div className="content-box">
                        <div className="links">
                            <a href="#">
                                <i className="fa-solid fa-tag"></i>
                                <span>Lifestyle /</span>
                            </a>
                            <a href="#">
                                <i className="fa-solid fa-tag"></i>
                                <span>Organic /</span>
                            </a>
                            <a href="#">
                                <i className="fa-solid fa-tag"></i>
                                <span>Natural</span>
                            </a>
                        </div>
                        <div className="content">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <a href="#" className="btn">Start This Goal</a>
                        </div>
                    </div>
                </div>
           
    )
}