// {expresion/expr1}
var response = IIF($feature["tip_pad"]=='1', 'Padrón Nominal de Usuarios', 'Padrón Nominal de Instituciones')
return response