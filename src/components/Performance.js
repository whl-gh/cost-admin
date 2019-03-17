import React from "react";

let Performance = (props)=>{
    return (
        <div className="performance">
            <table className="performance-tbl">
                <caption className="text-left">信息统计(<small>最近12个月</small>)</caption>
                <tbody>
                    <tr>
                        <td className="performance-title">累计需求数量</td>
                        <td>3200</td>
                        <td className="performance-title">已完成需求数量</td>
                        <td>3158</td>
                        <td className="performance-title">累计Bug数量</td>
                        <td>6000</td>
                        <td className="performance-title">已处理Bug数量</td>
                        <td>4000</td>
                    </tr>
                    <tr>
                        <td className="performance-title">本月需求数量</td>
                        <td>300</td>
                        <td className="performance-title">本月已完成需求数量</td>
                        <td>179</td>
                        <td className="performance-title">本月Bug数量</td>
                        <td>1050</td>
                        <td className="performance-title">本月已处理Bug数量</td>
                        <td>792</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Performance;