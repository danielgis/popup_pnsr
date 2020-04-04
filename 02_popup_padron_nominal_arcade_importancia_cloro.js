// {expresion/expr2}
var response = ''
var response_dict = {};

response_dict['a'] = IIF($feature["acl_importancia_a"]=='1', 'Ayuda a prevenir enfermedades como la diarrea', null)
response_dict['b'] = IIF($feature["acl_importancia_b"]=='1', 'El agua clorada mata bacterias, virus y huevos de parásitos', null)
response_dict['c'] = IIF($feature["acl_importancia_c"]=='1', 'No sabe', null)
for (var i in response_dict){
    if(response_dict[i] != null){
        response = response_dict[i] + TextFormatting.NewLine + response
    }
}

return response