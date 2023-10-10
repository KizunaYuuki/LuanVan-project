import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn import tree
import json

# Đoc dữ liệu
df = pd.read_csv("./src/python/dataset.csv")
print(df)

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

# Tạo model
model = tree.DecisionTreeClassifier()

# Huấn luyện model
model.fit(inputs_n.values, target)

# Tính điểm model
model.score(inputs_n.values,target)

# Dự đoán - Gợi ý dịch vụ
result = model.predict([[2,2,1]]).tolist()

# In kết quả 
print(json.dumps(result))