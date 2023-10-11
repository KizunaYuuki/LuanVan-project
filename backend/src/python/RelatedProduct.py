import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn import tree
import json

# Truyền tham số 
import sys 

# Đoc dữ liệu
df = pd.read_csv("./src/python/dataset.csv")
# print(df)

# Chỉnh sữa tham số
provider = sys.argv[1]
service_type = sys.argv[2]
weight = int(sys.argv[3])

index_provider = ''
index_service_type = ''
index_weight = ''

for index, element in enumerate(df['provider']):
    if element == provider:
        index_provider = index
        # print(index, element)
        break

for index, element in enumerate(df['service_type']):
    if element == service_type:
        # print(index, element)
        index_service_type = index
        break

for index, element in enumerate(df['weight']):
    if element == weight:        
        # print(index, element)
        index_weight = index
        break

# Edit dữ liệu
inputs = df.drop('related_product',axis='columns')

target = df['related_product']

le_provider = LabelEncoder()
le_service_type = LabelEncoder()
le_weight = LabelEncoder()

inputs['provider_n'] = le_provider.fit_transform(inputs['provider'])
inputs['service_type_n'] = le_service_type.fit_transform(inputs['service_type'])
inputs['weight_n'] = le_weight.fit_transform(inputs['weight'])

inputs_n = inputs.drop(['provider','service_type','weight'],axis='columns')
# print(inputs_n)

# Dừng chương trình khi không tìm thấy index
if (index_provider == '' or index_service_type == '' or index_weight == ''):
    print(False)
    sys.exit()

index_provider = inputs_n['provider_n'][index_provider]
index_service_type = inputs_n['service_type_n'][index_service_type]
index_weight = inputs_n['weight_n'][index_weight]

# Tạo model
model = tree.DecisionTreeClassifier()

# Huấn luyện model
model.fit(inputs_n.values, target)

# Tính điểm model
model.score(inputs_n.values,target)

# Dự đoán - Gợi ý dịch vụ
# # print(index_provider, index_service_type, index_weight)
result = model.predict([[index_provider,index_service_type,index_provider]]).tolist()

# In kết quả 
# print(json.dumps(result))
print(result[0])