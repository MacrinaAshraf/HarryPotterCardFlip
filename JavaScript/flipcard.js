function myFunction(x)
{
    x.classList.toggle("change");
    if (document.getElementById("myDropdown").classList.contains('show'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content")[0];
            {
            var openDropdown = dropdowns;
            // Close the dropdown if the user clicks outside of it
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
    else
    {
        document.getElementById("myDropdown").classList.add("show");
    }
}