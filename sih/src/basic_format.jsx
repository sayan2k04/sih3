import "./basic.css";
import "./All.css";
export default function Basic(){
    function navigateToPage() {
        var selectElement = document.getElementById("navigate");
        var selectedValue = selectElement.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    }
    return (
       <>
       <div id="home">
            <a href="page1.html">Home</a>
            {/* <label htmlFor="navigate">Choose a page:</label> */}
                <select id="navigate" onChange={navigateToPage}>
                    <option className="ba" value="">Diseases/Solutions</option>
                    <option value="page1.html" className="ba">Powdery mildew</option>
                    <option value="page2.html" className="ba">Leaf blister</option>
                    <option value="page3.html" className="ba">Bacterial speck</option>
                    <option value="page4.html" className="ba">Downy mildew</option>
                    <option value="page5.html" className="ba">Fusarium</option>
                    <option value="page6.html" className="ba">Rust</option>
                    <option value="page7.html" className="ba">Black spot</option>
                    <option value="page8.html" className="ba">Damping off</option>
                    <option value="page9.html" className="ba">Verticillium</option>
                    <option value="page10.html" className="ba">Mosaic virus</option>
                </select>
            <a href="page1.html">About Us</a><br/>
            </div>
       </>
    );
}