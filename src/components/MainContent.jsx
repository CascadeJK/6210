import scp from '../data/scp.json'



function MainContent()
{
    return(
        <main>
            {
                scp.map(

                    (scp) => (
                        <div className=' p-4 mt-5' key={scp.Subject}>
                            <h3>{scp.Subject}</h3>
                            <img className="images w-50 " src={"/images/" + scp.Image}  alt="Logo" />
                            <h3>{scp.Class}</h3>
                            <p className='w-50'>{scp.Description}</p>
                            <p className='w-50'>{scp.Containment}</p>
                        </div>
                    )
                )
            }
        </main>
    );
}

export default MainContent;