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

# Edit dữ liệu
inputs = df.drop('related_product',axis='columns')

target = df['related_product']
# print(target)

le_provider = LabelEncoder()
le_service_type = LabelEncoder()

inputs['provider_n'] = le_provider.fit_transform(inputs['provider'])
inputs['service_type_n'] = le_service_type.fit_transform(inputs['service_type'])
inputs['weight_n'] = inputs['weight']

inputs_n = inputs.drop(['provider','service_type','weight'],axis='columns')
# print(inputs_n)

# Dừng chương trình khi không tìm thấy index
if (index_provider == '' or index_service_type == '' or int(sys.argv[3]) == ''):
    print(False)
    sys.exit()

index_provider = inputs_n['provider_n'][index_provider]
index_service_type = inputs_n['service_type_n'][index_service_type]

# Tạo model
model = tree.DecisionTreeClassifier(ccp_alpha=0.01)

# Huấn luyện model
model.fit(inputs_n.values, target)

# Tính điểm model
model.score(inputs_n.values,target)

# Dự đoán - Gợi ý dịch vụ
# # print(index_provider, index_service_type, weight)
result = model.predict([[index_provider,index_service_type,weight]]).tolist()

# In kết quả 
# print(json.dumps(result))
# print(result[0])

def printRelatedProduct(data):
    if(data==1):
        print([1, 2, 3])
    elif(data==2):
        print([1, 2, 3])
    elif(data==4):
        print([1, 2, 3])
    elif(data==5):
        print([1, 2, 3])
    elif(data==6):
        print([1, 2, 3])
    elif(data==7):
        print([1, 2, 3])
    elif(data==8):
        print([1, 2, 3])
    elif(data==9):
        print([1, 2, 3])
    elif(data==10):
        print([1, 2, 3])
    elif(data==11):
        print([1, 2, 3])
    elif(data==13):
        print([1, 2, 3])
    elif(data==14):
        print([1, 2, 3])
    elif(data==15):
        print([1, 2, 3])
    elif(data==16):
        print([1, 2, 3])
    elif(data==17):
        print([1, 2, 3])
    elif(data==18):
        print([1, 2, 3])
    elif(data==19):
        print([1, 2, 3])
    elif(data==20):
        print([1, 2, 3])
    elif(data==21):
        print([1, 2, 3])
    elif(data==22):
        print([1, 2, 3])
    elif(data==23):
        print([1, 2, 3])
    elif(data==24):
        print([1, 2, 3])
    elif(data==25):
        print([1, 2, 3])
    elif(data==26):
        print([1, 2, 3])
    elif(data==27):
        print([1, 2, 3])
    elif(data==28):
        print([1, 2, 3])
    else:
        print([1, 5, 8])

printRelatedProduct(result[0])