import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Tạo DataFrame
df = pd.DataFrame({
    'Product': ['1234567890', '9876543210', '3210987654', '4567890123', '3210987653', '3210987656', '3210987657', '3210987658', '3210987650'],
    'Price': [100, 200, 300, 400, 300, 200, 300, 400, 300],
    'Category': ['Electronics', 'Fashion', 'Home', 'Food', 'Home', 'Fashion', 'Home', 'Food', 'Home'],
    'Brand': ['Apple', 'Nike', 'Samsung', 'Nestle', 'IKEA', 'Nike', 'Samsung', 'Nestle', 'IKEA']
})

# Chuyển đổi các biến chuỗi thành biến nhị phân (One-Hot Encoding)
df_encoded = pd.get_dummies(df, columns=['Category', 'Brand'])
# df['Category'] = pd.Categorical(df['Category'])
# df['Brand'] = pd.Categorical(df['Brand'])

# Chia dữ liệu thành tập huấn luyện và tập kiểm tra
X_train, X_test, y_train, y_test = train_test_split(df_encoded.drop('Product', axis=1), df['Category'], test_size=0.3)

# Tạo bộ phân loại cây quyết định
clf = DecisionTreeClassifier()

# Huấn luyện bộ phân loại
clf.fit(X_train, y_train)

# Đánh giá bộ phân loại trên tập kiểm tra
y_pred = clf.predict(X_test)
print(f'Độ chính xác: {accuracy_score(y_test, y_pred):.2f}')

# Sử dụng bộ phân loại để thực hiện dự đoán
product_ids = ['1234567890']
new_data = df_encoded[df_encoded['Product'].isin(product_ids)].drop('Product', axis=1)
predictions = clf.predict(new_data)
print(predictions)
