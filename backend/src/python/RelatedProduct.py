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
        print([2, 9, 10, 257, 264])
    elif(data==2):
        print([3, 10, 11, 18, 19])
    elif(data==3):
        print([4, 11, 12, 19, 20])
    elif(data==4):
        print([5, 12, 13, 20, 21])
    elif(data==5):
        print([6, 13, 14, 21, 22])
    elif(data==6):
        print([7, 14, 15, 22, 23])
    elif(data==7):
        print([8, 15, 16, 23, 24])
    elif(data==8):
        print([24, 32, 40, 48])
    elif(data==9):
        print([130, 131, 132, 133, 134, 135])
    elif(data==10):
        print([132, 134, 136, 138, 140])
    elif(data==11):
        print([162, 167, 168, 173, 174])
    elif(data==12):
        print([163, 168, 169, 174, 175])
    elif(data==13):
        print([164, 169, 170, 175, 176])
    elif(data==14):
        print([165, 170, 171, 176, 177])
    elif(data==15):
        print([166, 171, 172, 177, 178])
    elif(data==16):
        print([172, 178, 184, 190])
    elif(data==17):
        print([258, 264, 265, 271, 272])
    elif(data==18):
        print([259, 265, 266, 272, 273])
    elif(data==19):
        print([260, 266, 267, 273, 274])
    elif(data==20):
        print([261, 267, 268, 274, 275])
    elif(data==21):
        print([262, 268, 269, 275, 276])
    elif(data==22):
        print([263, 269, 270, 276, 277])
    elif(data==23):
        print([277, 284, 291, 298])
    elif(data==24):
        print([370, 376, 377, 383, 384])
    elif(data==25):
        print([371, 377, 378, 384, 385])
    elif(data==26):
        print([372, 378, 379, 385, 386])
    elif(data==27):
        print([373, 379, 380, 386, 387])
    elif(data==28):
        print([374, 380, 381, 387, 388])
    elif(data==29):
        print([375, 381, 382, 388, 389])
    elif(data==30):
        print([382, 389, 396, 403])
    elif(data==31):
        print([482, 488, 489, 495, 496])
    elif(data==32):
        print([483, 489, 490, 496, 497])
    elif(data==33):
        print([484, 490, 491, 497, 498])
    elif(data==34):
        print([485, 491, 492, 498, 499])
    elif(data==35):
        print([486, 492, 493, 499, 500])
    elif(data==36):
        print([487, 493, 494, 500, 501])
    elif(data==37):
        print([494, 501, 508, 515])
    else:
        print(False)

printRelatedProduct(result[0])