# k8s-practice

## 준비물
kubectl, minikube, docker

## 실행방법
```
minikube start --driver=docker

kubectl apply -f=deployment.yaml -f=service.yaml

minikube service [service-name]
```

## TodoList
- node 대신 springboot로 서버 만들기
- helm, prometheus, grafana 붙여보기 (minikube로는 연결이 잘 되지 않는 이슈 있다고 함. 좀 더 찾아보자)