FROM node:lts-alpine3.22

# 安装 pnpm
RUN npm install -g pnpm

WORKDIR /app

# 第一步：复制锁文件（这是缓存的关键）
COPY pnpm-lock.yaml ./

# 第二步：通过 fetch 命令，仅将包下载到虚拟存储中
RUN pnpm fetch

# 第三步：复制包描述文件和其他源代码
COPY package.json ./
COPY . .

# 第四步：在离线状态下安装依赖
# -r 表示如果是在 monorepo 中，则安装所有包的依赖
RUN pnpm install -r --offline --frozen-lockfile

CMD [ "npm", "start" ]