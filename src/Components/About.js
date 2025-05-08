import React from 'react'

export default function About() {
  return (
    <div className='container' style={{marginTop : "135px",marginBottom : "100px"}}>
        <div>
            <h2 className='text-center mb-3'>About TrendNews</h2>
            <p style={{fontSize : "18px"}}><span className='fw-semibold'>TrendNews</span> is a modern news application designed to keep users informed with the latest
                headlines and stories from around the world. It offers a seamless experience for browsing 
                news across various categories including <span className='fw-semibold'>Business, Entertainment, Health, Science, Sports, 
                and Technology</span>.
                Built using React, <span className='fw-semibold'>TrendNews</span> provides a fast and responsive interface that works smoothly 
                across both desktop and mobile devices. Whether you're catching up on the latest health 
                trends or reading tech updates, the intuitive layout ensures you can quickly find what 
                you're looking for.
                The app fetches real-time news from reliable sources and presents it in a clean, 
                easy-to-read format. Users can navigate different sections using the category menu, 
                which adapts to smaller screens with a mobile-friendly sidebar.
                <span className='fw-semibold'>TrendNews</span> was created with the goal of delivering curated news content in a minimal 
                and distraction-free environment. It's the perfect tool for anyone who wants to stay 
                updated with current events in an organized and user-focused way.
            </p>
        </div>
        
        <div className="accordion mt-5" id="accordionExample">
            <h4 className='mb-3'>Frequently Asked Questions (FAQs) about TrendNews</h4>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button fw-semibold" style={{fontSize : "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. What is TrendNews?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TrendNews</strong> is a web-based news platform that delivers up-to-date headlines and stories from multiple categories including Business, Technology, Sports, and more.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" style={{fontSize : "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. How often is the news updated?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    News is fetched in real-time from trusted APIs or sources, ensuring that users always see the latest updates.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" style={{fontSize : "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Can I read news offline?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Currently, <strong>TrendNews</strong> does not support offline mode. An internet connection is required to fetch the latest news articles.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" style={{fontSize : "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    4. Is TrendNews free to use?
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Yes, <strong>TrendNews</strong> is completely free and accessible to all users without any subscription.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" style={{fontSize : "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    5. What technologies are used to build TrendNews?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TrendNews</strong> is built using ReactJS for the frontend, along with Bootstrap for styling. The news content is typically fetched using APIs like NewsAPI or similar services.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" style={{fontSize : "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    6. Will more features be added in the future?
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Yes, features such as bookmarking articles, dark mode, search filters, and user preferences are planned for future updates.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
