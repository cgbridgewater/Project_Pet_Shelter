import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WishList = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            {/* title and image */}
            <img className='wishList' src="https://www.parpets.org/uploads/5/7/4/1/5741185/editor/wishlist.jpg?1510458017" alt="Wish List" />
            <h1 style={{textAlign:"center", color:"#073DAA", textShadow:"1px 1px 2em #172023", position:""}}>Donate Goods From Our Wish List</h1>
            {/* Donation text */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:"200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter is a nonprofit corporation who relies not only on monetary donations, but also in-kind donations to perform everyday functions.  In-kind donations are tax deductible, however we only are only able to accept certain items.  See the list of acceptable donation items below.  Please contact us at 1-877-ADOPT-ME for information on how to donate any of these items, questions about additional types of in-kind donations or assistance with a donation drive.  Donations can be dropped off at the Adoptions front desk during normal operating hours.
            </p>
            {/* start wish list */}
            <h2 style={{textAlign:"center"}}> Adoptions/Foster Program </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li>
                    Litter scoopers
                </li>
                <li>
                    Litter pans
                </li>
                <li>
                    Puppy Potty pads
                </li>
                <li>
                    Waterproof tarps
                </li>
                <li>
                    Rolling carts
                </li>
                <li>
                    Kitty condos
                </li>
                <li>
                    Storage shelves
                </li>
                <li>
                    Small stainless steel bowls
                </li>
                <li>
                    Cotton balls
                </li>
                <li>
                    KMR kitten formula
                </li>
                <li>
                    Miracle nipples for syringe-feeding neonatal orphans
                </li>
                <li>
                    Newspaper
                </li>
                <li>
                    Royal Canin Mother & baby cat dry & wet food  and formula
                </li>
                <li>
                    Royal Canin Mother & baby puppy dry & wet food and starter mousse
                </li>
                <li>
                    Baby wipes
                </li>
                <li>
                    Puppy & kitten shampoos
                </li>
                <li>
                    Dog toys (rope and Kong chew preferred)
                </li>
                <li>
                    Cat toys, preferably without catnip (fuzzy mice, balls with bells, small Mylar balls)
                </li>
                <li>
                    Medium and large pet carriers
                </li>
                <li>
                    Shopping/grocery bags-Paper or reusable
                </li>
                <li>
                    <a style={{textDecoration:"underline",textAlign:"start", fontSize:"16px", color:"purple"}} href="https://www.amazon.com/hz/wishlist/ls/2IUJS0TK46EVS">Link to Fosters wishlist</a> 
                
                </li>
                <li>
                    <a style={{textDecoration:"underline",textAlign:"start", fontSize:"16px", color:"purple"}} href="https://www.amazon.com/hz/wishlist/ls/2H6WSAI62K3JD">Link to Adoptions wishlist</a>
                </li>
            </ul>
            {/* end wish list */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list 2 */}
            <h2 style={{textAlign:"center"}}> AniMeals </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li>
                    Any unexpired, unopened cat and dog food (can be wet or dry)
                </li>
                <li>
                    Cat and dog treats for all sizes
                </li>
                <li>
                    Canned food for SENIOR cats and dogs                
                </li>
                <li>
                    Ziploc Freezer Gallon and/or Quart bags (Ziploc FREEZER brand only please)
                </li>
                <li>
                    <a style={{textDecoration:"underline",textAlign:"start", fontSize:"16px", color:"purple"}} href="https://www.amazon.com/hz/wishlist/ls/2H7R14M1V4CIX">Link to Meals wishlist</a>
                </li>
            </ul>
            {/* end wish list 2 */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list 3 */}
            <h2 style={{textAlign:"center"}}> Technology and Web Needs </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li>
                    Webcams
                </li>
                <li>
                    SD Card Readers
                </li>
                <li>
                    Flash Memory Cards
                </li>
                <li>
                    <a style={{textDecoration:"underline",textAlign:"start", fontSize:"16px", color:"purple"}} href="https://www.amazon.com/hz/wishlist/ls/87HJBBA3HSU9">Link to Tech wishlist</a>
                </li>
            </ul>
            {/* end wish list 3 */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list 4 */}
            <h2 style={{textAlign:"center"}}> Special Events </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li>
                    Banner material (specifically 24″ wide canvas rolls for our HP Design Jet 500)
                </li>
                <li>
                    120 Quart Coolers
                </li>
                <li>
                    Portable Potty Patches
                </li>
                <li>
                    T-shirt display
                </li>
                <li>
                    Plastic A-Frames
                </li>
                <li>
                    Collapsible folding all-terrain wagons
                </li>
            </ul>
            {/* end wish list 4 */}
            <br />
            <hr style={{width:"70%", margin:"0 auto"}} />
            <br/>
            {/* start wish list 5 */}
            <h2 style={{textAlign:"center"}}> Pet Encounter Therapy </h2>
            <ul style={{width:"40%", minWidth:"370px", margin:"0 auto"}} >
                <li>
                    New or gently used bagless heavy-duty vacuum
                </li>
                <li>
                    Gift certificates to local grocery stores, hardware stores, and gas stations
                </li>
                <li>
                    Rugs/towels
                </li>
                <li>
                    Metallic foldable exercise pens (same type as Adoptions has on their list)
                </li>
                <li>
                    Cuttlebone, sealed bird treats, birds toys
                </li>
                <li>
                    Magnetic reptile ledges
                </li>
                <li>
                    Hand crank emergency radio for evacuation kit
                </li>
                <li>
                    <a style={{textDecoration:"underline",textAlign:"start", fontSize:"16px", color:"purple"}} href="https://www.amazon.com/hz/wishlist/ls/1OM3FWUF6KB75">Link to Amazon wishlist</a>
                </li>
            </ul>
            {/* end wish list 5 */}
            <br />
            {/* Link to home page */}
            <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline", marginRight:"50px"}}>Go To Shelter Home</Link>
        </div>
    )
}

export default WishList