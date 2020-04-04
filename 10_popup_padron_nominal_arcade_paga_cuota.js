// {expresion/expr10}
var response = IIF($feature["cuo_cobra"] == "1" && $feature["cuo_periodo"] != "6", "show", "none");
return response