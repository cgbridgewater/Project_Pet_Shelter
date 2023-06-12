import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WishList = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            <img className='wishList' src="https://www.parpets.org/uploads/5/7/4/1/5741185/editor/wishlist.jpg?1510458017" alt="Wish List" />
            <h1 style={{textAlign:"center", color:"#073DAA", textShadow:"1px 1px 2em #172023", position:""}}>Donate Goods From Our Wish List</h1>


            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
            <span style={{fontSize:"200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
            he Coding Dojo Pet Shelter is a nonprofit corporation who relies not only on monetary donations, but also in-kind donations to perform everyday functions.  In-kind donations are tax deductible, however we only are only able to accept certain items.  See the list of acceptable donation items below.  Please contact us at 1-877-ADOPT-ME for information on how to donate any of these items, questions about additional types of in-kind donations or assistance with a donation drive.  Donations can be dropped off at the Adoptions front desk during normal operating hours.
            </p>
            {/* start wish list */}
            <h2 style={{textAlign:"center"}}> Adoptions/Foster Program </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Litter scoopers
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Litter pans
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Puppy Potty pads
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Waterproof tarps
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Rolling carts
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Kitty condos
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Storage shelves
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Small stainless steel bowls
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Cotton balls
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    KMR kitten formula
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Miracle nipples for syringe-feeding neonatal orphans
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Newspaper
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Royal Canin Mother & baby cat dry & wet food  and formula
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Royal Canin Mother & baby puppy dry & wet food and starter mousse
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Baby wipes
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Puppy & kitten shampoos
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Dog toys (rope and Kong chew preferred)
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Cat toys, preferably without catnip (fuzzy mice, balls with bells, small Mylar balls)
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Medium and large pet carriers
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Shopping/grocery bags-Paper or reusable
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    <a style={{textDecoration:"underline"}} href="https://www.amazon.com/hz/wishlist/ls/2IUJS0TK46EVS">Link to Fosters wishlist</a> 
                
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    <a style={{textDecoration:"underline"}} href="https://www.amazon.com/hz/wishlist/ls/2H6WSAI62K3JD">Link to Adoptions wishlist</a>
                </li>
            </ul>
            {/* end wish list */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list */}
            <h2 style={{textAlign:"center"}}> AniMeals </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Any unexpired, unopened cat and dog food (can be wet or dry)
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Cat and dog treats for all sizes
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Canned food for SENIOR cats and dogs                
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Ziploc Freezer Gallon and/or Quart bags (Ziploc FREEZER brand only please)
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    <a style={{textDecoration:"underline"}} href="https://www.amazon.com/hz/wishlist/ls/2H7R14M1V4CIX">Link to Meals wishlist</a>
                </li>
            </ul>
            {/* end wish list */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list */}
            <h2 style={{textAlign:"center"}}> Technology and Web Needs </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Webcams
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    SD Card Readers
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Flash Memory Cards
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    <a style={{textDecoration:"underline"}} href="https://www.amazon.com/hz/wishlist/ls/87HJBBA3HSU9">Link to Tech wishlist</a>
                </li>
            </ul>
            {/* end wish list */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list */}
            <h2 style={{textAlign:"center"}}> Special Events </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Banner material (specifically 24″ wide canvas rolls for our HP Design Jet 500)
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    120 Quart Coolers
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Portable Potty Patches
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    T-shirt display
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Plastic A-Frames
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Collapsible folding all-terrain wagons
                </li>
            </ul>
            {/* end wish list */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list */}
            <h2 style={{textAlign:"center"}}> Pet Encounter Therapy </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    New or gently used bagless heavy-duty vacuum
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Gift certificates to local grocery stores, hardware stores, and gas stations
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Rugs/towels
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Metallic foldable exercise pens (same type as Adoptions has on their list)
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Cuttlebone, sealed bird treats, birds toys
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Magnetic reptile ledges
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    Hand crank emergency radio for evacuation kit
                </li>
                <li style={{textAlign:"start", fontSize:"16px", color:"#073DAA"}}>
                    <a style={{textDecoration:"underline"}} href="https://www.amazon.com/hz/wishlist/ls/1OM3FWUF6KB75">Link to Amazon wishlist</a>
                </li>
            </ul>
            {/* end wish list */}
            {/* donate button
            <a href="https://oregonhumane.tfaforms.net/23">
                <img className='donate' style={{height:"75px", width:"172px", borderRadius:"5px", border: "1px solid #073DAA", marginTop:"2%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMMYCnUQ3zRjA9N-fsTSZ1NcTzglTZUzUxyKBtTc3zU-BCcTTukP2F9VrkVOoHubw4p4&usqp=CAU" alt="donate button"/>
            </a> */}
            {/* donate button */}
            <br />
            <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline", marginRight:"50px"}}>Return To Shelter Home</Link>

        </div>
    )
}

export default WishList