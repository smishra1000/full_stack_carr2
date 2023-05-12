import { useState, useEffect } from "react"

const yearData = [
    {
        id: "10008", year: "2016"
    },
    {
        id: "10009", year: "2017"
    },
    {
        id: "10010", year: "2018"
    },
    {
        id: "10011", year: "2019"
    },
    {
        id: "10012", year: "2020"
    },
    {
        id: "10013", year: "2021"
    }

]

 const pointsData = {
    "2016":[{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"GL","TeamName":"Gujarat Lions","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2130/264.3","AgainstTeam":"2285/271.1","NetRunRate":"-0.374","Quotient":0,"OrderNo":"1","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WWLWL"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"RCB","TeamName":"Royal Challengers Bangalore","TeamLogo":"","Matches":14,"Wins":8,"Loss":6,"Tied":0,"NoResult":0,"Points":16,"Draw":0,"ForTeams":"2613/270.2","AgainstTeam":"2345/268.3","NetRunRate":"0.932","Quotient":0,"OrderNo":"2","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WWWWL"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"SRH","TeamName":"Sunrisers Hyderabad","TeamLogo":"","Matches":14,"Wins":8,"Loss":6,"Tied":0,"NoResult":0,"Points":16,"Draw":0,"ForTeams":"2082/259.5","AgainstTeam":"2078/267.3","NetRunRate":"0.245","Quotient":0,"OrderNo":"3","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LLWLW"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"KKR","TeamName":"Kolkata Knight Riders","TeamLogo":"","Matches":14,"Wins":8,"Loss":6,"Tied":0,"NoResult":0,"Points":16,"Draw":0,"ForTeams":"2123/253.2","AgainstTeam":"2121/256.2","NetRunRate":"0.106","Quotient":0,"OrderNo":"4","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLLWL"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"MI","TeamName":"Mumbai Indians","TeamLogo":"","Matches":14,"Wins":7,"Loss":7,"Tied":0,"NoResult":0,"Points":14,"Draw":0,"ForTeams":"2194/272.2","AgainstTeam":"2190/267","NetRunRate":"-0.146","Quotient":0,"OrderNo":"5","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWLWL"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"DD","TeamName":"Delhi Capitals","TeamLogo":"","Matches":14,"Wins":7,"Loss":7,"Tied":0,"NoResult":0,"Points":14,"Draw":0,"ForTeams":"2040/259.1","AgainstTeam":"2107/262.3","NetRunRate":"-0.155","Quotient":0,"OrderNo":"6","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWLLW"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"RPS","TeamName":"Rising Pune Supergiant","TeamLogo":"","Matches":14,"Wins":5,"Loss":9,"Tied":0,"NoResult":0,"Points":10,"Draw":0,"ForTeams":"2025/244.5","AgainstTeam":"1991/241.1","NetRunRate":"0.015","Quotient":0,"OrderNo":"7","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WWLLL"},{"IPLYear":2016,"Category":"IPL","CompetitionID":"2016","TeamID":"","TeamCode":"PBKS","TeamName":"Punjab Kings","TeamLogo":"","Matches":14,"Wins":4,"Loss":10,"Tied":0,"NoResult":0,"Points":8,"Draw":0,"ForTeams":"2134/269.4","AgainstTeam":"2224/259.5","NetRunRate":"-0.646","Quotient":0,"OrderNo":"8","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LLLWL"}],
    "2017":[{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"MI","TeamName":"Mumbai Indians","TeamLogo":"","Matches":14,"Wins":10,"Loss":4,"Tied":0,"NoResult":0,"Points":20,"Draw":0,"ForTeams":"2407/272.1","AgainstTeam":"2242/278.1","NetRunRate":"0.784","Quotient":0,"OrderNo":"1","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLLWW"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"RPS","TeamName":"Rising Pune Supergiant","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2180/271","AgainstTeam":"2165/275.1","NetRunRate":"0.176","Quotient":0,"OrderNo":"2","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLWWW"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"SRH","TeamName":"Sunrisers Hyderabad","TeamLogo":"","Matches":14,"Wins":8,"Loss":5,"Tied":0,"NoResult":1,"Points":17,"Draw":0,"ForTeams":"2221/252","AgainstTeam":"2118/257.5","NetRunRate":"0.599","Quotient":0,"OrderNo":"3","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WWLLW"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"KKR","TeamName":"Kolkata Knight Riders","TeamLogo":"","Matches":14,"Wins":8,"Loss":6,"Tied":0,"NoResult":0,"Points":16,"Draw":0,"ForTeams":"2329/260.5","AgainstTeam":"2300/277.3","NetRunRate":"0.641","Quotient":0,"OrderNo":"4","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LLWLL"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"PBKS","TeamName":"Punjab Kings","TeamLogo":"","Matches":14,"Wins":7,"Loss":7,"Tied":0,"NoResult":0,"Points":14,"Draw":0,"ForTeams":"2207/261.2","AgainstTeam":"2229/263.4","NetRunRate":"-0.009","Quotient":0,"OrderNo":"5","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWWLW"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"DD","TeamName":"Delhi Capitals","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2219/276.2","AgainstTeam":"2255/264","NetRunRate":"-0.512","Quotient":0,"OrderNo":"6","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWWLW"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"GL","TeamName":"Gujarat Lions","TeamLogo":"","Matches":14,"Wins":4,"Loss":10,"Tied":0,"NoResult":0,"Points":8,"Draw":0,"ForTeams":"2406/269.5","AgainstTeam":"2472/265","NetRunRate":"-0.412","Quotient":0,"OrderNo":"7","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LLWLL"},{"IPLYear":2017,"Category":"IPL","CompetitionID":"2017","TeamID":"","TeamCode":"RCB","TeamName":"Royal Challengers Bangalore","TeamLogo":"","Matches":14,"Wins":3,"Loss":10,"Tied":0,"NoResult":1,"Points":7,"Draw":0,"ForTeams":"1845/260","AgainstTeam":"2033/242.1","NetRunRate":"-1.299","Quotient":0,"OrderNo":"8","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WLLLL"}],
    "2018":[{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"SRH","TeamName":"Sunrisers Hyderabad","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2230/273.3","AgainstTeam":"2193/278.4","NetRunRate":"0.284","Quotient":0,"OrderNo":"1","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LLLWW"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"CSK","TeamName":"Chennai Super Kings","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2488/275.3","AgainstTeam":"2433/277.1","NetRunRate":"0.253","Quotient":0,"OrderNo":"2","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLWLW"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"KKR","TeamName":"Kolkata Knight Riders","TeamLogo":"","Matches":14,"Wins":8,"Loss":6,"Tied":0,"NoResult":0,"Points":16,"Draw":0,"ForTeams":"2363/265.1","AgainstTeam":"2425/270","NetRunRate":"-0.07","Quotient":0,"OrderNo":"3","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WWWLL"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"RR","TeamName":"Rajasthan Royals","TeamLogo":"","Matches":14,"Wins":7,"Loss":7,"Tied":0,"NoResult":0,"Points":14,"Draw":0,"ForTeams":"2130/255.3","AgainstTeam":"2141/249.2","NetRunRate":"-0.25","Quotient":0,"OrderNo":"4","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLWWW"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"MI","TeamName":"Mumbai Indians","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2380/278.4","AgainstTeam":"2282/277.3","NetRunRate":"0.317","Quotient":0,"OrderNo":"5","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWLWW"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"RCB","TeamName":"Royal Challengers Bangalore","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2322/264.4","AgainstTeam":"2383/275.4","NetRunRate":"0.129","Quotient":0,"OrderNo":"6","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWWWL"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"PBKS","TeamName":"Punjab Kings","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2210/268.4","AgainstTeam":"2259/258.5","NetRunRate":"-0.502","Quotient":0,"OrderNo":"7","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LLLLL"},{"IPLYear":2018,"Category":"IPL","CompetitionID":"2018","TeamID":"","TeamCode":"DD","TeamName":"Delhi Captials","TeamLogo":"","Matches":14,"Wins":5,"Loss":9,"Tied":0,"NoResult":0,"Points":10,"Draw":0,"ForTeams":"2297/258","AgainstTeam":"2304/252.3","NetRunRate":"-0.222","Quotient":0,"OrderNo":"8","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WWLLL"}],
    "2019": [{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"MI","TeamName":"Mumbai Indians","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2380/275.1","AgainstTeam":"2282/277.2","NetRunRate":"0.421","Quotient":0,"OrderNo":"1","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WWLWL"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"CSK","TeamName":"Chennai Super Kings","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2043/274.1","AgainstTeam":"2012/274.5","NetRunRate":"0.131","Quotient":0,"OrderNo":"2","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LWLWL"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"DC","TeamName":"Delhi Capitals","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2207/272.5","AgainstTeam":"2238/278.1","NetRunRate":"0.044","Quotient":0,"OrderNo":"3","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLWWW"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"SRH","TeamName":"Sunrisers Hyderabad","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2288/269.2","AgainstTeam":"2200/277.5","NetRunRate":"0.577","Quotient":0,"OrderNo":"4","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LLWLL"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"KKR","TeamName":"Kolkata Knight Riders","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2466/270.4","AgainstTeam":"2419/266.2","NetRunRate":"0.028","Quotient":0,"OrderNo":"5","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWWLL"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"PBKS","TeamName":"Punjab Kings","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2429/276.3","AgainstTeam":"2503/277","NetRunRate":"-0.251","Quotient":0,"OrderNo":"6","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WLLLL"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"RR","TeamName":"Rajasthan Royals","TeamLogo":"","Matches":14,"Wins":5,"Loss":8,"Tied":0,"NoResult":1,"Points":11,"Draw":0,"ForTeams":"2153/257","AgainstTeam":"2192/248.2","NetRunRate":"-0.449","Quotient":0,"OrderNo":"7","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LNWWL"},{"IPLYear":2019,"Category":"IPL","CompetitionID":"2019","TeamID":"","TeamCode":"RCB","TeamName":"Royal Challengers Bangalore","TeamLogo":"","Matches":14,"Wins":5,"Loss":8,"Tied":0,"NoResult":1,"Points":11,"Draw":0,"ForTeams":"2146/258.4","AgainstTeam":"2266/254.3","NetRunRate":"-0.607","Quotient":0,"OrderNo":"8","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WNLWW"}],
    "2020": [{ "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "MI", "TeamName": "Mumbai Indians", "TeamLogo": "", "Matches": 14, "Wins": 9, "Loss": 5, "Tied": 0, "NoResult": 0, "Points": 18, "Draw": 0, "ForTeams": "2378/262.2", "AgainstTeam": "2187/274.5", "NetRunRate": "1.107", "Quotient": 0, "OrderNo": "1", "IsQualified": "1", "LeadBy": 0, "Deficit": 0, "Performance": "LWWLW" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "DC", "TeamName": "Delhi Capitals", "TeamLogo": "", "Matches": 14, "Wins": 8, "Loss": 6, "Tied": 0, "NoResult": 0, "Points": 16, "Draw": 0, "ForTeams": "2289/278.5", "AgainstTeam": "2271/273", "NetRunRate": "-0.109", "Quotient": 0, "OrderNo": "2", "IsQualified": "1", "LeadBy": 0, "Deficit": 0, "Performance": "WLLLL" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "SRH", "TeamName": "Sunrisers Hyderabad", "TeamLogo": "", "Matches": 14, "Wins": 7, "Loss": 7, "Tied": 0, "NoResult": 0, "Points": 14, "Draw": 0, "ForTeams": "2225/269.3", "AgainstTeam": "2125/277.5", "NetRunRate": "0.608", "Quotient": 0, "OrderNo": "3", "IsQualified": "1", "LeadBy": 0, "Deficit": 0, "Performance": "WWWLW" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "RCB", "TeamName": "Royal Challengers Bangalore", "TeamLogo": "", "Matches": 14, "Wins": 7, "Loss": 7, "Tied": 0, "NoResult": 0, "Points": 14, "Draw": 0, "ForTeams": "2147/272.2", "AgainstTeam": "2183/271", "NetRunRate": "-0.172", "Quotient": 0, "OrderNo": "4", "IsQualified": "1", "LeadBy": 0, "Deficit": 0, "Performance": "LLLLW" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "KKR", "TeamName": "Kolkata Knight Riders", "TeamLogo": "", "Matches": 14, "Wins": 7, "Loss": 7, "Tied": 0, "NoResult": 0, "Points": 14, "Draw": 0, "ForTeams": "2219/278", "AgainstTeam": "2206/269.1", "NetRunRate": "-0.214", "Quotient": 0, "OrderNo": "5", "IsQualified": "", "LeadBy": 0, "Deficit": 0, "Performance": "WLLWL" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "PBKS", "TeamName": "Punjab Kings", "TeamLogo": "", "Matches": 14, "Wins": 6, "Loss": 8, "Tied": 0, "NoResult": 0, "Points": 12, "Draw": 0, "ForTeams": "2335/277.5", "AgainstTeam": "2343/273.3", "NetRunRate": "-0.162", "Quotient": 0, "OrderNo": "6", "IsQualified": "", "LeadBy": 0, "Deficit": 0, "Performance": "LLWWW" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "CSK", "TeamName": "Chennai Super Kings", "TeamLogo": "", "Matches": 14, "Wins": 6, "Loss": 8, "Tied": 0, "NoResult": 0, "Points": 12, "Draw": 0, "ForTeams": "2191/274.3", "AgainstTeam": "2275/269.4", "NetRunRate": "-0.455", "Quotient": 0, "OrderNo": "7", "IsQualified": "", "LeadBy": 0, "Deficit": 0, "Performance": "WWWLL" }, { "IPLYear": 2020, "Category": "IPL", "CompetitionID": "2020", "TeamID": "", "TeamCode": "RR", "TeamName": "Rajasthan Royals", "TeamLogo": "", "Matches": 14, "Wins": 6, "Loss": 8, "Tied": 0, "NoResult": 0, "Points": 12, "Draw": 0, "ForTeams": "2288/272.4", "AgainstTeam": "2482/277", "NetRunRate": "-0.569", "Quotient": 0, "OrderNo": "8", "IsQualified": "", "LeadBy": 0, "Deficit": 0, "Performance": "LWWLW" }],
    "2021":[{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"DC","TeamName":"Delhi Capitals","TeamLogo":"","Matches":14,"Wins":10,"Loss":4,"Tied":0,"NoResult":0,"Points":20,"Draw":0,"ForTeams":"2180/267","AgainstTeam":"2136/278","NetRunRate":"0.481","Quotient":0,"OrderNo":"1","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LWWLW"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"CSK","TeamName":"Chennai Super Kings","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2368/272","AgainstTeam":"2218/268.5","NetRunRate":"0.455","Quotient":0,"OrderNo":"2","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"LLLWW"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"RCB","TeamName":"Royal Challengers Bangalore","TeamLogo":"","Matches":14,"Wins":9,"Loss":5,"Tied":0,"NoResult":0,"Points":18,"Draw":0,"ForTeams":"2165/273.4","AgainstTeam":"2159/268.1","NetRunRate":"-0.14","Quotient":0,"OrderNo":"3","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WLWWW"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"KKR","TeamName":"Kolkata Knight Riders","TeamLogo":"","Matches":14,"Wins":7,"Loss":7,"Tied":0,"NoResult":0,"Points":14,"Draw":0,"ForTeams":"2119/259.5","AgainstTeam":"2080/274.5","NetRunRate":"0.587","Quotient":0,"OrderNo":"4","IsQualified":"1","LeadBy":0,"Deficit":0,"Performance":"WWLWL"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"MI","TeamName":"Mumbai Indians","TeamLogo":"","Matches":14,"Wins":7,"Loss":7,"Tied":0,"NoResult":0,"Points":14,"Draw":0,"ForTeams":"2117/265.5","AgainstTeam":"2128/271.1","NetRunRate":"0.116","Quotient":0,"OrderNo":"5","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WWLWL"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"PBKS","TeamName":"Punjab Kings","TeamLogo":"","Matches":14,"Wins":6,"Loss":8,"Tied":0,"NoResult":0,"Points":12,"Draw":0,"ForTeams":"2150/270.1","AgainstTeam":"2117/266","NetRunRate":"-0.001","Quotient":0,"OrderNo":"6","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"WLWLW"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"RR","TeamName":"Rajasthan Royals","TeamLogo":"","Matches":14,"Wins":5,"Loss":9,"Tied":0,"NoResult":0,"Points":10,"Draw":0,"ForTeams":"2196/276","AgainstTeam":"2318/259","NetRunRate":"-0.993","Quotient":0,"OrderNo":"7","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LLWLL"},{"IPLYear":2021,"Category":"IPL","CompetitionID":"2021","TeamID":"","TeamCode":"SRH","TeamName":"Sunrisers Hyderabad","TeamLogo":"","Matches":14,"Wins":3,"Loss":11,"Tied":0,"NoResult":0,"Points":6,"Draw":0,"ForTeams":"2077/277.1","AgainstTeam":"2216/275.4","NetRunRate":"-0.545","Quotient":0,"OrderNo":"8","IsQualified":"","LeadBy":0,"Deficit":0,"Performance":"LWLLW"}]
    
}


function Dashboard() {
    const [points, setPoints] = useState([])
    const [year, setYear] = useState("2020")
    const [sessions,setSessions] = useState(yearData)

    const onYearChange = (e) => {
        setYear(e.target.value)
        // const newPointsData = pointsData[e.target.value]
        // console.log(points)
        setPoints([])
        // setPoints((points)=>[...newPointsData])
    }
    useEffect(()=>{
        setPoints(pointsData["2020"])
    },[])
    useEffect(()=>{
         const newPointsData = pointsData[year]
    
        setPoints((points)=>[...newPointsData])
    },[year])
    // useEffect(() => {
    //     fetch("https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/feeds/stats/10012-groupstandings.js").then(function (res) {
    //         return res.json()
    //     }).then(function (result) {
    //         console.log(result)
    //     })
    // }, [])

    return (
        <div className="container">
            <h1>IPL dashboard</h1>
            <div className="row">
                <div className="col-md-3">
                    <select class="form-select form-select-lg mb-3" value={year} aria-label=".form-select-lg example" onChange={onYearChange}>
                        <option selected>Select session</option>
                        {/* <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option> */}
                        
                        {sessions.map((item)=>{
                            return(
                                <option value={item.year} key={item.id}>{item.year}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            <h1>IPl Points for Year {year}</h1>
            <div className="row">
                <table class="table table-striped">

                    <thead>
                        <tr>
                            <th scope="col">POS</th>
                            <th scope="col">TEAM</th>
                            <th scope="col">P</th>
                            <th scope="col">W</th>
                            <th scope="col">L</th>
                            <th scope="col">NR</th>
                            <th scope="col">NRR</th>
                            <th scope="col">FOR</th>
                            <th scope="col">AGAINST</th>
                            <th scope="col">PTS</th>
                            <th scope="col">RECENT FORM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {points.map((point)=>{
                            return(
                                <tr key={point.IPLYear}>
                                    <td>{point.OrderNo}</td>
                                    <td>{point.TeamName}</td>
                                    <td>{point.Matches}</td>
                                    <td>{point.Wins}</td>
                                    <td>{point.Loss}</td>
                                    <td>{point.NoResult}</td>
                                    <td>{point.NetRunRate}</td>
                                    <td>{point.ForTeams}</td>
                                    <td>{point.AgainstTeam}</td>
                                    <td>{point.Points}</td>
                                    <td>{point.Performance}</td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Dashboard