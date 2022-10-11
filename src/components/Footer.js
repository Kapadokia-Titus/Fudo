import '../css/style.css'
export default function Footer(){

    return(
        <footer class="footer">

        <section>

            <h3 class="Newsletter">Newsletter</h3>

            <form action="">
                <input type="email" placeholder="enter your email"/>
                <input type="submit" value="subscribe"/>
            </form>

            <div class="box-container">
                <div class="box">
                    <h3>our menu</h3>
                    <a href="#"> <i class="fas fa-arrow-right"></i> pizza</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> burger</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> chicken</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> pasta</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> and more...</a>

                </div>
                <div class="box">
                    <h3>quick links</h3>
                    <a href="#home"> <i class="fas fa-arrow-right"></i> Home</a>
                    <a href="#about"> <i class="fas fa-arrow-right"></i> About</a>
                    <a href="#popular"> <i class="fas fa-arrow-right"></i> Popular</a>
                    <a href="#menu"> <i class="fas fa-arrow-right"></i> Menu</a>
                    <a href="#order"> <i class="fas fa-arrow-right"></i> Order</a>
                    <a href="#blogs"> <i class="fas fa-arrow-right"></i> Blogs</a>
                </div>
                <div class="box">
                    <h3>extra links</h3>
                    <a href="#"> <i class="fas fa-arrow-right"></i> my order</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> my account</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> my favorite</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> terms of use</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i> policy</a>
                </div>
                <div class="box">
                    <h3>opening hours</h3>
                    <p>Monday : 7:00am To 10:00pm</p>
                    <p>Tuesday : 7:00am To 10:00pm</p>
                    <p>Wednesday : 7:00am To 10:00pm</p>
                    <p>Friday : 7:00am To 10:00pm</p>
                    <p>Saturday And Sunday Closed</p>
                </div>
            </div>

            <div class="bottom">
                <div class="social">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                </div>
                <div class="copy-right">
                    <p>All Rights Reserved!</p>
                </div>
            </div>

        </section>

    </footer>
    )
}