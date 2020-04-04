// {expresion/expr15}
var response = IIF($feature["cod_prestador_dep"]=='1.0', 'Nuevo', $feature["cod_prestador_dep"])
return response