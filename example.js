function generateMarker(color, text) {
        var imgDiv = $("<div></div>");
        //the d value is marker value you can find more information there
        //Url is https://www.w3.org/TR/SVG/paths.html#PathData
        var svgIcon = $(
            '<svg width="40px" height="54px"  viewBox="0 0 40 54" xmlns="http://www.w3.org/2000/svg">' +
            '<path style="fill:'+color+';stroke:#020202;stroke-width:1;stroke-miterlimit:10;" ' +
            'd="M30.6,15.737c0-8.075-6.55-14.6-14.6-14.6c-8.075,0-14.601,6.55-14.601,14.6c0,4.149,1.726,7.875,4.5,10.524c1.8,1.801,4.175,4.301,5.025,5.625c1.75,2.726,5,11.976,5,11.976s3.325-9.25,5.1-11.976c0.825-1.274,3.05-3.6,4.825-5.399C28.774,23.813,30.6,20.012,30.6,15.737z"/>' +
            '<circle style="fill:#FFFF;" cx="16" cy="16" r="11"/>' +
            '<text x="16" y="20" text-anchor="middle" style="font-weight:bold;font-size:11px;fill:#020202;">' + text + '</text>' +
            '</svg>'
        );
        imgDiv.append(svgIcon);
        var marker = $("<canvas height='60px' width='60px'></canvas>");
        var htmlOfSvg = div[0].innerHTML;

        canvg(marker[0], htmlOfSvg);

        var imgSrc = marker[0].toDataURL("image/png");
        return {
            url: imgSrc,
            scaledSize: new google.maps.Size(40, 56),
            size: new google.maps.Size(40, 56)
        };
    };

    var Marker = new google.maps.Marker({
        position: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
        Map: map,
        icon :createSvgIcon("#ADAA","A")
    });
