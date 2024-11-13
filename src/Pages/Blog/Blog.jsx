import "./Blog.scss"
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRedditAlien, FaRegBookmark, FaRegClock, FaTwitter } from 'react-icons/fa'
import { LuPill } from 'react-icons/lu'
import { Pagination } from '@mui/material'
import { IoIosSearch } from "react-icons/io";

const Blog = () => {
    return (
        <div className="blog-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-9 content-primary">
                        <div className="site-posts">
                            <article className="post">
                                <figure className="post-thumbnail">
                                    <a href="/">
                                        <img src={"../../assets/images/blogs/blog-3.jpg"} alt="But I must explain to you how all this mistaken idea" />
                                    </a>
                                </figure>

                                <div className="post-wrapper">
                                    <div className="entry-meta">
                                        <span className="meta-item entry-published">
                                            <FaRegClock />
                                            <a href="/">May 3, 2021</a>
                                        </span>

                                        <span className="meta-item entry-published">
                                            <FaRegBookmark />
                                            <a href="/" rel="category tag">Tips &amp; Tricks</a>
                                        </span>

                                        <span className="meta-item entry-tags">
                                            <LuPill />
                                            <a href="/" rel="tag">food</a>,{" "}
                                            <a href="/" rel="tag">store</a>,{" "}
                                            <a href="/" rel="tag">themeforest</a>
                                        </span>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="/">
                                            But I must explain to you how all this mistaken idea
                                        </a>
                                    </h2>

                                    <div className="entry-content">
                                        <div className="content-post">
                                            <p>
                                                Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet
                                                velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue
                                                tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu
                                                ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula.
                                                Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien
                                                mauris sodales
                                            </p>
                                            <div className="read-more entry-button">
                                                <a className="button" href="/">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </article>

                            <article className="post">
                                <figure className="post-thumbnail">
                                    <a href="/">
                                        <img src={"../../assets/images/blogs/blog-5.jpg"} alt="But I must explain to you how all this mistaken idea" />
                                    </a>
                                </figure>

                                <div className="post-wrapper">
                                    <div className="entry-meta">
                                        <span className="meta-item entry-published">
                                            <FaRegClock />
                                            <a href="/">May 3, 2021</a>
                                        </span>

                                        <span className="meta-item entry-published">
                                            <FaRegBookmark />
                                            <a href="/" rel="category tag">Grocery</a>
                                        </span>

                                        <span className="meta-item entry-tags">
                                            <LuPill />
                                            <a href="/" rel="tag">envato, </a>,{" "}
                                            <a href="/" rel="tag">fresh</a>{" "}
                                        </span>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="/">
                                            The Problem With Typefaces on the Web
                                        </a>
                                    </h2>

                                    <div className="entry-content">
                                        <div className="content-post">
                                            <p>
                                                Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet
                                                velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue
                                                tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu
                                                ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula.
                                                Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien
                                                mauris sodales
                                            </p>
                                            <div className="read-more entry-button">
                                                <a className="button" href="/">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </article>

                            <article className="post">
                                <figure className="post-thumbnail">
                                    <a href="/">
                                        <img src={"../../assets/images/blogs/blog-1.jpg"} alt="But I must explain to you how all this mistaken idea" />
                                    </a>
                                </figure>

                                <div className="post-wrapper">
                                    <div className="entry-meta">
                                        <span className="meta-item entry-published">
                                            <FaRegClock />
                                            <a href="/">May 3, 2021</a>
                                        </span>

                                        <span className="meta-item entry-published">
                                            <FaRegBookmark />
                                            <a href="/" rel="category tag">Grocery</a>
                                        </span>

                                        <span className="meta-item entry-tags">
                                            <LuPill />
                                            <a href="/" rel="tag">food, </a>,{" "}
                                            <a href="/" rel="tag">organic</a>{" "}
                                        </span>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="/">
                                            English Breakfast Tea With Tasty Donut Desserts
                                        </a>
                                    </h2>

                                    <div className="entry-content">
                                        <div className="content-post">
                                            <p>
                                                Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet
                                                velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue
                                                tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu
                                                ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula.
                                                Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien
                                                mauris sodales
                                            </p>
                                            <div className="read-more entry-button">
                                                <a className="button" href="/">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </article>

                            <div className="pagination d-flex justify-content-center align-items-center">
                                <Pagination count={10} color="primary"
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 content-secondary">
                        <div className="widget widget_search">
                            <div className="search_form">
                                <form className="search-form" id="search-form" action="" method="get">
                                    <input
                                        className="form_control"
                                        type="text"
                                        name="s"
                                        placeholder="Search..."
                                        autoComplete="off"
                                    />
                                    <button type="submit">
                                        <IoIosSearch />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="widget widget_popular_posts">
                            <h4 className="widget-title">Popular Posts</h4>
                            <div className="widget-body">
                                <div className="widget-posts">
                                    <article className="post">
                                        <figure className="post-thumbnail">
                                            <div className="post-number">1</div>
                                            <a href="https://klbtheme.com/bacola/blog/the-problem-with-typefaces-on-the-web/">
                                                <img
                                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-5-100x100.jpg"
                                                    alt="The Problem With Typefaces on the Web"
                                                />
                                            </a>
                                        </figure>
                                        <div className="post-wrapper">
                                            <h2 className="entry-title">
                                                <a
                                                    href="https://klbtheme.com/bacola/blog/the-problem-with-typefaces-on-the-web/"
                                                    title="The Problem With Typefaces on the Web"
                                                >
                                                    The Problem With Typefaces on the Web
                                                </a>
                                            </h2>
                                        </div>
                                    </article>

                                    <article className="post">
                                        <figure className="post-thumbnail">
                                            <div className="post-number">2</div>
                                            <a href="https://klbtheme.com/bacola/blog/but-i-must-explain-to-you-how-all-this-mistaken-idea/">
                                                <img
                                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-3-100x100.jpg"
                                                    alt="But I must explain to you how all this mistaken idea"
                                                />
                                            </a>
                                        </figure>
                                        <div className="post-wrapper">
                                            <h2 className="entry-title">
                                                <a
                                                    href="https://klbtheme.com/bacola/blog/but-i-must-explain-to-you-how-all-this-mistaken-idea/"
                                                    title="But I must explain to you how all this mistaken idea"
                                                >
                                                    But I must explain to you how all this mistaken idea
                                                </a>
                                            </h2>
                                        </div>
                                    </article>

                                    <article className="post">
                                        <figure className="post-thumbnail">
                                            <div className="post-number">3</div>
                                            <a href="https://klbtheme.com/bacola/blog/english-breakfast-tea-with-tasty-donut-desserts/">
                                                <img
                                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-1-100x100.jpg"
                                                    alt="English Breakfast Tea With Tasty Donut Desserts"
                                                />
                                            </a>
                                        </figure>
                                        <div className="post-wrapper">
                                            <h2 className="entry-title">
                                                <a
                                                    href="https://klbtheme.com/bacola/blog/english-breakfast-tea-with-tasty-donut-desserts/"
                                                    title="English Breakfast Tea With Tasty Donut Desserts"
                                                >
                                                    English Breakfast Tea With Tasty Donut Desserts
                                                </a>
                                            </h2>
                                        </div>
                                    </article>

                                </div>
                            </div>
                        </div>

                        <div className="widget widget_social_list">
                            <h4 className="widget-title">Social Media</h4>

                            <div className="widget-body">
                                <div className="site-social wide">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" className="facebook">
                                                <FaFacebookF />
                                                <span>facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/home" className="twitter">
                                                <FaTwitter />
                                                <span>twitter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://pinterest.com/" className="pinterest">
                                                <FaPinterestP />
                                                <span>pinterest</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" className="linkedin">
                                                <FaLinkedinIn />
                                                <span>linkedin</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.reddit.com/" className="reddit">
                                                <FaRedditAlien />
                                                <span>reddit</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="widget widget_media_image">
                            <h4 className="widget-title">Widget Banner</h4>
                            <img
                                width="1280"
                                height="1750"
                                src={"../../assets/images/sidebar-banner.gif"}
                                className="image wp-image-1184 attachment-full size-full"
                                alt=""
                                style={{ maxWidth: '100%', height: 'auto' }}
                                decoding="async"
                            />
                        </div>

                        <div className="widget widget_tag_cloud">
                            <h4 className="widget-title">Tags</h4>
                            <div className="tagcloud">
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="envato (1 item)"
                                >
                                    envato
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '22pt' }}
                                    aria-label="food (2 items)"
                                >
                                    food
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="fresh (1 item)"
                                >
                                    fresh
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="grocery (1 item)"
                                >
                                    grocery
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="organic (1 item)"
                                >
                                    organic
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="quality (1 item)"
                                >
                                    quality
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="store (1 item)"
                                >
                                    store
                                </a>
                                <a
                                    href="/"
                                    className="tag-cloud-link"
                                    style={{ fontSize: '8pt' }}
                                    aria-label="themeforest (1 item)"
                                >
                                    themeforest
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog