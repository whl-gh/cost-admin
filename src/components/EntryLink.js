import React from "react";
import { major, minor } from "../source/links";

let EntryLink = (props)=>(
    <div className="entryLink">
        <div className="entryLink-major">
            {
                major.map((category, i)=>{
                    return (
                        <div key={i.toString()} className="entryLink-item" style={{width: (1/major.length*100)+"%"}}>
                            <h3 className="entryLink-title">{category.category}</h3>
                            <ul className="entryLink-list">
                                {
                                    category.items.map((item, j)=>{
                                        return (
                                            <li key={j.toString()} className="entryLink-link">
                                                <a href={item.url} className="entryLink-icon" target="_blank" rel="noopener noreferrer" title={item.name}>
                                                    <img src={item.icon} alt={item.name} />
                                                </a>
                                                <p className="entryLink-text">
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                                                </p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </div>
        <div className="entryLink-minor">
            <div>
                <h3 className="entryLink-title">友<br/>情<br/>链<br/>接</h3>
            </div>
            <div>
                {
                    minor.map((items, i)=>{
                        return (
                            <ul key={i.toString()} className="entryLink-list entryLink-minor-list">
                                {
                                    items.map((item, j)=>{
                                        return (
                                            <li key={j.toString} className="entryLink-minor-item">
                                                <a href={item.url} title={item.name} target="_blank" rel="noopener noreferrer">{item.name}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        );
                    })
                }
            </div>
        </div>
    </div>
);

export default EntryLink;