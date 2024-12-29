class App extends React.Component {
    state = {
        qlist:[],
        status:0
    }

    title  = <div><b>Work3 :</b> แบบทดสอบ ด้วย ReactJS</div>;
    footer = <div>By 653380030-3  เอกะรัตตะฆัต สืบเหล่างิ้ว <br/>
            College of Computing, Khon Kaen University </div>;

    constructor() {
        super();
    }

    render() {
    return (
    <div className="card">
        <div className="card-header">{this.title} </div>
        <div className="card-body"> </div>
        <div className="card-footer">{this.footer} </div>
    </div>
        )}      
    }