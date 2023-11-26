import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn import tree
import json

# Truyền tham số 
import sys 

# Đoc dữ liệu
df = pd.read_csv("./src/python/dataset.csv")
# df = pd.read_csv("backend/src/python/dataset.csv")
# print(df)

# Chỉnh sữa tham số
provider = sys.argv[1]
service_type = sys.argv[2]
weight = int(sys.argv[3])

index_provider = ''
index_service_type = ''
index_weight = ''

arr_provider = set()
arr_service_type = set()
arr_weight = set()

for index, element in enumerate(df['provider']):
    if element == provider:
        index_provider = index
        # print(index, element)
        break
    else:
        arr_provider.add(element)
        index_provider = len(arr_provider) + 1
# print(arr_provider)

for index, element in enumerate(df['service_type']):
    if element == service_type:
        # print(index, element)
        index_service_type = index
        break
    else:
        arr_service_type.add(element)
        index_service_type = len(arr_service_type) + 1
# print(arr_service_type)

for index, element in enumerate(df['weight']):
    if element == weight:
        # print(index, element)
        index_weight = index
        break
    else:
        arr_weight.add(element)
        index_weight = len(arr_weight) + 1
# print(arr_weight)

# Edit dữ liệu
inputs = df.drop('related_product',axis='columns')

target = df['related_product']
# print(target)

# CHUYỂN ĐỔI DỮ LIỆU SANG SỐ
le_provider = LabelEncoder()
le_service_type = LabelEncoder()

inputs['provider_n'] = le_provider.fit_transform(inputs['provider'])
inputs['service_type_n'] = le_service_type.fit_transform(inputs['service_type'])
# inputs['weight_n'] = le_service_type.fit_transform(inputs['weight'])
inputs['weight_n'] = inputs['weight']

inputs_n = inputs.drop(['provider','service_type','weight'],axis='columns')
# print(inputs_n)

# Dừng chương trình khi không tìm thấy index
# if (index_provider == '' or index_service_type == '' or index_weight == ''):
# if (index_provider == '' or index_service_type == '' or int(sys.argv[3]) == ''):
if (index_provider == '' or index_service_type == '' or weight == ''):
    print(False)
    sys.exit()

if index_provider != (len(arr_provider) + 1):
    index_provider = inputs_n['provider_n'][index_provider]
if index_service_type != (len(arr_service_type) + 1):
    index_service_type = inputs_n['service_type_n'][index_service_type]
if index_weight != (len(arr_weight) + 1):
    index_weight = inputs_n['weight_n'][index_weight]

# Tạo model
model = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=1)
model2 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=2)
model3 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=3)
model4 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=4)
model5 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=5)
model6 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=6)
model7 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=7)
model8 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=8)
model9 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=9)
model10 = tree.DecisionTreeClassifier(ccp_alpha=0.01, max_depth=10)

# Huấn luyện model
model.fit(inputs_n.values, target)
model2.fit(inputs_n.values, target)
model3.fit(inputs_n.values, target)
model4.fit(inputs_n.values, target)
model5.fit(inputs_n.values, target)
model6.fit(inputs_n.values, target)
model7.fit(inputs_n.values, target)
model8.fit(inputs_n.values, target)
model9.fit(inputs_n.values, target)
model10.fit(inputs_n.values, target)

# Tính điểm model
# model.score(inputs_n.values,target)

# Dự đoán - Gợi ý dịch vụ
# print(index_provider, " ", index_service_type, " ", weight)
result = model.predict([[index_provider,index_service_type,weight]]).tolist()
result2 = model2.predict([[index_provider,index_service_type,weight]]).tolist()
result3 = model3.predict([[index_provider,index_service_type,weight]]).tolist()
result4 = model4.predict([[index_provider,index_service_type,weight]]).tolist()
result5 = model5.predict([[index_provider,index_service_type,weight]]).tolist()
result6 = model6.predict([[index_provider,index_service_type,weight]]).tolist()
result7 = model7.predict([[index_provider,index_service_type,weight]]).tolist()
result8 = model8.predict([[index_provider,index_service_type,weight]]).tolist()
result9 = model9.predict([[index_provider,index_service_type,weight]]).tolist()
result10 = model10.predict([[index_provider,index_service_type,weight]]).tolist()

data = set()
# data.add(result[0])
data.add(result2[0])
data.add(result3[0])
data.add(result4[0])
# data.add(result5[0])
data.add(result6[0])
# data.add(result7[0])
data.add(result8[0])
# data.add(result9[0])
data.add(result10[0])

# In kết quả 
# print(json.dumps(result))
# print(result[0])
# print(data)

# CHUYỂN THÀNH MẢNG
arrayReletedProduct = []
for element in data:
    arrayReletedProduct.append(element)
print(arrayReletedProduct)