"use strict";

/*  ------------------
    Remove Preloader
    ------------------  */

    $(window).load(function()
    {
            
        $('#preloader').delay(350).fadeOut('slow');

    });

        /* ---------------
           Expand Button 1
           --------------- */
            
        $("a.expand_link").on("click", function()
        {

            $(this).fadeOut(1350);
            $("div.wrapper").fadeIn(1350);
            $("div.sidebar").fadeIn(1350);
            $("a.collapse2").hide();

        });

        /* ----------
           Collapse 1
           ---------- */
           
        $("a.collapse1").on("click", function()
        {

            $("div.wrapper").fadeOut(1350);
            $("div.sidebar").fadeOut(1350);
            $("a.expand_link").fadeIn(1350);

        });

        /* ---------------
           Expand Button 2
           --------------- */

        $("a.ShowProjectsAndCertificates").on("click", function()
        {

            $(this).fadeOut(1350);
            $("a.collapse2").show();
            $("div.ProjectsAndCertificates").fadeIn(1350);
            $("div.wrapper div.sidebar").css(
            {

                height: "422.5rem",

            });

        });

        /* -----------------
           Collapse Button 2
           ----------------- */
    
        $("a.collapse2").on("click", function()
        {

            $(this).hide();
            $("div.ProjectsAndCertificates").fadeOut(1350);
            $("a.ShowProjectsAndCertificates").fadeIn(1350);
            $("div.wrapper div.sidebar").css(
            {

                height: "221.5rem",

            });

        });