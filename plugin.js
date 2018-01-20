(function( $ ) {

    $.fn.popup = function( action ) {

        if ( action === "master") {
          this.css({
            position: "fixed",
            top: "47%",
            left: "49%",
            "-webkit-transform": "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            width: 230,
            "text-align":"center",
            "font-weight": "bold",
            "padding": "8px 8px 8px 8px",
            "line-height": "27px",
            border: "2px solid #aaa",
            "border-radius": "15px",
            backgroundColor: "#DAD9E1"}).draggable().appendTo('#container');
        }

        if ( action === "mind" ) {
          this.css({
              position: "fixed",
              top: "8%",
              left: "10%",
              width: 120,
              "text-align":"center",
              "padding": "4px 4px 4px 4px",
              "line-height": "27px",
              border: "2px solid #777A95",
              "border-radius": "25px",
              backgroundColor: "#FEF5F6"}).draggable().appendTo('#container');
  }
        return this;
    };

}( jQuery ));
