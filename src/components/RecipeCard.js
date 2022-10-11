
export default function RecipeCard({desc, title, img }){

    return(
                <div class="box">
                    <div class="date">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>21st May, 2021</span>
                    </div>
                    <div class="image">
                        <img src={img} alt="" />
                    </div>
                    <div class="content-box">
                        <div class="links">
                            <a href="#">
                                <i class="fa-solid fa-tag"></i>
                                <span>Lifestyle /</span>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-tag"></i>
                                <span>Organic /</span>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-tag"></i>
                                <span>Natural</span>
                            </a>
                        </div>
                        <div class="content">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <a href="#" class="btn">Start This Goal</a>
                        </div>
                    </div>
                </div>
           
    )
}