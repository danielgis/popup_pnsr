// {expresion/expr12}
var response = IIF($feature["cod_sistema"]=='1.0', 'Nuevo', $feature["cod_sistema"])
return response