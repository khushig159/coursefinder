import React from 'react'
import "../style/CoursesPage.css";

export default function CourseCard({c,i}) {
  return (
    
      <div className="card" key={i}>
              <img src={c.img} alt="course" loading="lazy" className="courseimg" />
              <div className="card-body">
                <h4>{c.title}</h4>
                <div className="meta">
                  <span>Price {c.price}</span>
                  <span>Time {c.time}</span>
                  <span>Students {c.students}</span>
                </div>
                <div className="author">
                  <img src={`https://i.pravatar.cc/30?img=${i + 1}`} loading="lazy"  className="courseimg" />
                  <span>{c.author}</span>
                </div>
              </div>
            </div>
    
  )
}
