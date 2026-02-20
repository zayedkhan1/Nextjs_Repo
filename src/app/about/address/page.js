import style from './address.module.css'

const page = () => {
    return (
        <div>
            {/* test-span er khetre style.test-span kaj korbe na ,ty bracket dici */}
            <h1 className="test">THis si my about  <span className={`${style["test-spane"]}`}>address page</span> </h1>
        </div>
    );
};

export default page;