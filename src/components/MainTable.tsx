import TableContent from "./TableContent";

const MainTable:React.FC = () => {
    return (
        <section className="main-table">
            <div className="container">
                <div>
                    <button className="button_full">Add</button>
                </div>
                <div className="main-table_content">
                    <TableContent />
                </div>
            </div>
        </section>
    )
}
export default MainTable;